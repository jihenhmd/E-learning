<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VariableController extends AbstractController
{
    #[Route('/variable', name: 'app_variable')]
    public function index(): Response
    {
        return $this->render('variable/index.html.twig');
            
        
    }
}
