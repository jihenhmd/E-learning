<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DocumentationContentController extends AbstractController
{
    #[Route('/documentation', name: 'app_documentation_content')]
    public function index(): Response
    {
        return $this->render('view_cours/introduction-subsection1.html') ;
           
    
    }
}
