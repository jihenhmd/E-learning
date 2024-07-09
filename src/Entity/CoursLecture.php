<?php

namespace App\Entity;
use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * CoursLecture
 *
 * @ORM\Table(name="cours_lecture")
 * @ORM\Entity
 */
class CoursLecture
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_lecture", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idLecture;

    /**
     * @var int
     *
     * @ORM\Column(name="id_section", type="integer", nullable=false)
     */
    private $idSection;

    /**
     * @var string
     *
     * @ORM\Column(name="titre", type="string", length=200, nullable=false)
     */
    private $titre;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=0, nullable=false)
     */
    private $description;

    /**
     * @var int
     *
     * @ORM\Column(name="ordre", type="integer", nullable=false)
     */
    private $ordre;

    /**
     * @var int
     *
     * @ORM\Column(name="etape_obligatoir", type="integer", nullable=true)
     */
    private $etapeObligatoir;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_operation", type="datetime", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $dateOperation = 'CURRENT_TIMESTAMP';

    public function __construct()
    {
       $this->dateOperation = new DateTime(); 
    }
    public function getIdLecture(): ?int
    {
        return $this->idLecture;
    }

    public function getIdSection(): ?int
    {
        return $this->idSection;
    }

    public function setIdSection(int $idSection): self
    {
        $this->idSection = $idSection;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getEtapeObligatoir(): ?int
    {
        return $this->etapeObligatoir;
    }

    public function setEtapeObligatoir(int $etapeObligatoir): self
    {
        $this->etapeObligatoir = $etapeObligatoir;

        return $this;
    }

    public function getDateOperation(): ?\DateTimeInterface
    {
        return $this->dateOperation;
    }

    public function setDateOperation(\DateTimeInterface $dateOperation): self
    {
        $this->dateOperation = $dateOperation;

        return $this;
    }


}
