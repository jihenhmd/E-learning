<?php

namespace App\Entity;
use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * CoursQuizQuestionOption
 *
 * @ORM\Table(name="cours_Quiz_question_option")
 * @ORM\Entity
 */
class CoursQuizQuestionOption
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_option", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idOption;

    /**
     * @var int
     *
     * @ORM\Column(name="id_question", type="integer", nullable=false)
     */
    private $idQuestion;

    /**
     * @var string
     *
     * @ORM\Column(name="reponse_option", type="string", length=200, nullable=false)
     */
    private $reponseOption;

    /**
     * @var int
     *
     * @ORM\Column(name="reponse_true_or_false", type="integer", nullable=false)
     */
    private $reponseTrueOrFalse;

    /**
     * @var int
     *
     * @ORM\Column(name="ordre", type="integer", nullable=false)
     */
    private $ordre;


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

    public function getIdOption(): ?int
    {
        return $this->idOption;
    }

    public function getIdQuestion(): ?int
    {
        return $this->idQuestion;
    }

    public function setIdQuestion(int $idQuestion): self
    {
        $this->idQuestion = $idQuestion;

        return $this;
    }

    public function getReponseOption(): ?string
    {
        return $this->reponseOption;
    }

    public function setReponseOption(string $reponseOption): self
    {
        $this->reponseOption = $reponseOption;

        return $this;
    }

    public function getReponseTrueOrFalse(): ?int
    {
        return $this->reponseTrueOrFalse;
    }

    public function setReponseTrueOrFalse(int $reponseTrueOrFalse): self
    {
        $this->reponseTrueOrFalse = $reponseTrueOrFalse;

        return $this;
    }

    public function getOrdre(): ?int
    {
        return $this->rdre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

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
