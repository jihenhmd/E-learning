<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InstallPythonController extends AbstractController
{
    #[Route('/install', name: 'app_install_python')]
    public function index(): Response
    {
        return $this->render('install_python/index.html.twig');
            
    }
}
