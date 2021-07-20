<?php


class Image {
    const sizes = array('2048', '1600', '1280', '1024', '768', '360');

    public static function getFile($image) {
        if (!$image) return null;
        
        if (is_string($image->name())) return $image;

        $file = $image->toFile();

        if (!$file) return null;

        if ($file->type() !== 'image') return null;
        return $file;
    }
    
    public static function getSrcset($image, $customSizes = array()) {
        $file = self::getFile($image);
        if(!$file) return array();


        if (empty($customSizes)) {
            $sizes = self::sizes;
        } else {
            $sizes = $customSizes;
        }

        $f = array();
        foreach($sizes as $size) {
            $img = $file->resize($size);
            $f[$size] = $img->url();
        }

        return $f;
    }

    public static function getMetadatas($file) {
        $mime = $file->mime();
        $title = $file->name();
        $thumb = $file->resize(1);
        $dimensions = $file->dimensions();

        return array(
            'mime' => $mime,
            'title' => $title,
            'thumb' => $thumb,
            'dimensions' => $dimensions
        );
    }

    public static function getHtml($image) {
        $file = self::getFile($image);
        if(!$file) return array();

        $metadatas = self::getMetadatas($file);
        $mime = $metadatas['mime'];
        $title = $metadatas['title'];
        
        $sizes = self::getSrcset($file);
        $html = "<picture>";
        
        $u = null;

        foreach($sizes as $size => $url) {
            $u = $url;
            $html .= "<source srcset='{$u}' media='(min-width: {$size}px)' type='$mime' />";
        }

        $html .= "<img alt='$title' src='{$u}'/>";
        $html .= "</picture>";

        return $html;
    }
}