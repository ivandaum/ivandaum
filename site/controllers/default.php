<?php

return function ($page, $site) {
    $content = $site->content();
    $social = array();

    foreach($content->social()->toStructure() as $link) {
        $social[] = array(
        'name' => $link->name()->toString(),
        'url' => $link->url()->toString()
        );
    }

    $about = array(
        'bio' => $content->about()->toString(),
        'clients' => $content->clients()->split(),
        'email' => $content->email()->toString(),
        'socialNetworks' => $social
    );

    $projects = array();

    foreach($site->children()->template('project') as $project) {
        $main = $project->content();
        $sidebar = $project->sidebar();

        $year = $project->releaseDate()->toDate('Y');
        $month = $project->releaseDate()->toDate('M');

        $projects[] = array(
            'title' => $main->title()->toString(),
            'url' => $main->url()->toString(),
            'type' => $main->type()->toString(),
            'client' => $main->client()->toString(),
            'color' => $main->color()->toString(),
            'description' => $main->description()->toString(),
            'date' => $year,
            'dateWithMonth' => $month . ' ' . $year,
            'cover' => $project->cover(),
            'coverHtml' => Image::getHtml($project->cover())
        );
    }

    return array(
        'about' => json_encode($about),
        'projects' => json_encode($projects)
    );
};