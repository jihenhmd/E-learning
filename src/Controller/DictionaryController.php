<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DictionaryController extends AbstractController
{
    #[Route('/dictionary', name: 'app_dictionary')]
    public function index(): Response
    {
        return $this->render('dictionary/index.html.twig');
    }
}
