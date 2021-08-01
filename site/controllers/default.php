<?php

return function ($page, $site) {
    $content = $site->content();
    $contact = array();

    foreach($content->social()->toStructure() as $link) {
        $contact[strtolower($link->name()->toString())] = $link->url()->toString();
    }

    $contact['email'] = 'mailto:' . $content->email()->toString();

    $about = array(
        'bio' => $content->about()->toString(),
        'clients' => $content->clients()->split(),
        'contact' => $contact
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