<?php

namespace App\Entity;
use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * LectureContent
 *
 * @ORM\Table(name="lecture_content")
 * @ORM\Entity
 */
class LectureContent
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_content", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idContent;

    /**
     * @var int
     *
     * @ORM\Column(name="id_lecture", type="integer", nullable=false)
     */
    private $idLecture;

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
     * @ORM\Column(name="dure", type="integer", nullable=false)
     */
    private $dure;

    /**
     * @var float
     *
     * @ORM\Column(name="min_score", type="float", precision=10, scale=0, nullable=false)
     */
    private $minScore;

    /**
     * @var int
     *
     * @ORM\Column(name="ordre", type="integer", nullable=false)
     */
    private $ordre;

    /**
     * @var int
     *
     * @ORM\Column(name="random", type="integer", nullable=false)
     */
    private $random;

    /**
     * @var int
     *
     * @ORM\Column(name="show_correction", type="integer", nullable=false)
     */
    private $showCorrection;

    /**
     * @var int
     *
     * @ORM\Column(name="preview_document", type="integer", nullable=false)
     */
    private $previewDocument;

    /**
     * @var int
     *
     * @ORM\Column(name="id_type", type="integer", nullable=false)
     */
    private $idType;

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

    public function getIdContent(): ?int
    {
        return $this->idContent;
    }

    public function getIdLecture(): ?int
    {
        return $this->idLecture;
    }

    public function setIdLecture(int $idLecture): self
    {
        $this->idLecture = $idLecture;

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

    public function getDure(): ?int
    {
        return $this->dure;
    }

    public function setDure(int $dure): self
    {
        $this->dure = $dure;

        return $this;
    }

    public function getMinScore(): ?float
    {
        return $this->minScore;
    }

    public function setMinScore(float $minScore): self
    {
        $this->minScore = $minScore;

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

    public function getShowCorrection(): ?int
    {
        return $this->showCorrection;
    }

    public function setShowCorrection(int $showCorrection): self
    {
        $this->showCorrection = $showCorrection;

        return $this;
    }

    public function getPreviewDocument(): ?int
    {
        return $this->previewDocument;
    }

    public function setPreviewDocument(int $previewDocument): self
    {
        $this->previewDocument = $previewDocument;

        return $this;
    }

    public function getIdType(): ?int
    {
        return $this->idType;
    }

    public function setIdType(int $idType): self
    {
        $this->idType = $idType;

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
