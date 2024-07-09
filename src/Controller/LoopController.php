<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoopController extends AbstractController
{
    #[Route('/loop', name: 'app_loop')]
    public function index(): Response
    {
        return $this->render('loop/index.html.twig');
            
        
    }
}
