<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LearnController extends AbstractController
{
    #[Route('/learn', name: 'app_learn')]
    public function index(): Response
    {
        return $this->render('learn/index.html.twig');
    
}
}