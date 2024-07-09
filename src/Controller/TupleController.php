<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TupleController extends AbstractController
{
    #[Route('/tuple', name: 'app_tuple')]
    public function index(): Response
    {
        return $this->render('tuple/index.html.twig');
           
        
    }
}
