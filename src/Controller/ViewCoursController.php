<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ViewCoursController extends AbstractController
{
    #[Route('/', name: 'app_view_cours')]
    public function index(): Response
    {
       
        return $this->render('view_cours/index.html.twig', [
            'controller_name' => 'ViewCoursController',
        ]);
    }
}
