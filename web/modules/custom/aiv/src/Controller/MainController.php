<?php
/**
 * Created by PhpStorm.
 * User: f.elhalafi
 * Date: 19/11/2019
 * Time: 15:10
 */

namespace Drupal\aiv\Controller;


use Drupal\node\Entity\Node;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController
{
    /**
     * @return JsonResponse
     */
    public function changeGalerie()
    {
        $selection = \Drupal::request()->get('selection');

        $query = \Drupal::entityQuery('node')
            ->condition('status', 1)
            ->condition('type', 'galeries')
            ->condition('nid', $selection)
            ->sort('created', 'DESC');
        $nids = $query->execute();
        $results = Node::load(reset($nids));

        $template = array(
            '#theme' => 'theme_galeries_home_ajax',
            '#cache' => ['max-age' => 0],
            '#data' => $results
        );
        $render_service = \Drupal::service('renderer');
        $language = \Drupal::languageManager()->getCurrentLanguage()->getId();
        $path_alias = \Drupal::service('path.alias_manager')->getAliasByPath('/node/' . $results->nid->value, $language);

        return new JsonResponse(['title' => $results->title->value, 'body' => $results->body->summary, 'url' => $path_alias, 'images' => $render_service->renderPlain($template)]);
    }
}