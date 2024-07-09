<?php

namespace App\Entity;
use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * CoursSection
 *
 * @ORM\Table(name="cours_section")
 * @ORM\Entity
 */
class CoursSection
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_section", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idSection;

    /**
     * @var int
     *
     * @ORM\Column(name="id_cours", type="integer", nullable=false)
     */
    private $idCours;

    /**
     * @var string
     *
     * @ORM\Column(name="titre_section", type="string", length=200, nullable=false)
     */
    private $titreSection;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=0, nullable=false)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="What_will_students_be_able_to", type="string", length=200, nullable=true)
     */
    private $whatWillStudentsBeAbleTo;

    /**
     * @var int
     *
     * @ORM\Column(name="ordre", type="integer", nullable=false)
     */
    private $ordre;

    /**
     * @var int
     *
     * @ORM\Column(name="random", type="integer", nullable=true)
     */
    private $random;

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
    public function getIdSection(): ?int
    {
        return $this->idSection;
    }

    public function getIdCours(): ?int
    {
        return $this->idCours;
    }

    public function setIdCours(int $idCours): self
    {
        $this->idCours = $idCours;

        return $this;
    }

    public function getTitreSection(): ?string
    {
        return $this->titreSection;
    }

    public function setTitreSection(string $titreSection): self
    {
        $this->titreSection = $titreSection;

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

    public function getWhatWillStudentsBeAbleTo(): ?string
    {
        return $this->whatWillStudentsBeAbleTo;
    }

    public function setWhatWillStudentsBeAbleTo(string $whatWillStudentsBeAbleTo): self
    {
        $this->whatWillStudentsBeAbleTo = $whatWillStudentsBeAbleTo;

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

    public function getRandom(): ?int
    {
        return $this->random;
    }

    public function setRandom(int $random): self
    {
        $this->random = $random;

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
