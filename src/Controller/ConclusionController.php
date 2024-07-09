<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ConclusionController extends AbstractController
{
    #[Route('/conclusion', name: 'app_conclusion')]
    public function index(): Response
    {
        return $this->render('conclusion/index.html.twig', [
            'controller_name' => 'ConclusionController',
        ]);
    }
}
