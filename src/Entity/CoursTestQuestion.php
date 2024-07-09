<?php

namespace App\Entity;
use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * CoursTestQuestion
 *
 * @ORM\Table(name="cours_test_question")
 * @ORM\Entity
 */
class CoursTestQuestion
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_question", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idQuestion;

    /**
     * @var int
     *
     * @ORM\Column(name="id_content", type="integer", nullable=false)
     */
    private $idContent;

     /**
     * @var string
     *
     * @ORM\Column(name="bareme", type="string", length=200, nullable=true)
     */
    private $bareme;

    /**
     * @var string
     *
     * @ORM\Column(name="question", type="string", length=200, nullable=false)
     */
    private $question;

    /**
     * @var string|null
     *
     * @ORM\Column(name="QA_Reponse_text", type="text", nullable=true)
     */
    private $QAReponsetext;

    /**
     * @var string
     *
     * @ORM\Column(name="explanation", type="string", length=200, nullable=false)
     */
    private $explanation;

    /**
     * @var string
     *
     * @ORM\Column(name="skils", type="string", length=200, nullable=false)
     */
    private $skils;

    /**
     * @var int
     *
     * @ORM\Column(name="ordre", type="integer", nullable=false)
     */
    private $ordre;

    /**
     * @var int
     *
     * @ORM\Column(name="true_false", type="integer", nullable=false)
     */
    private $trueFalse;

    /**
     * @var int
     *
     * @ORM\Column(name="random_option", type="integer", nullable=false)
     */
    private $randomOption;

    /**
     * @var string
     *
     * @ORM\Column(name="reponse_ture", type="string", length=100, nullable=false)
     */
    private $reponseTure;

    /**
     * @var int|null
     *
     * @ORM\Column(name="type_test", type="integer", nullable=true)
     */
    private $idTypeQuestion;

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
    
    public function getIdQuestion(): ?int
    {
        return $this->idQuestion;
    }

    public function getIdContent(): ?int
    {
        return $this->idContent;
    }

    public function setIdContent(int $idContent): self
    {
        $this->idContent = $idContent;

        return $this;
    }

    public function getQuestion(): ?string
    {
        return $this->question;
    }

    public function setQuestion(string $question): self
    {
        $this->question = $question;

        return $this;
    }

    public function getBareme(): ?string
    {
        return $this->bareme;
    }

    public function setBareme(string $bareme): self
    {
        $this->bareme = $bareme;

        return $this;
    }

    public function getExplanation(): ?string
    {
        return $this->explanation;
    }

    public function setExplanation(string $explanation): self
    {
        $this->explanation = $explanation;

        return $this;
    }

    public function getKnowledge(): ?string
    {
        return $this->knowledge;
    }

    public function setKnowledge(string $knowledge): self
    {
        $this->knowledge = $knowledge;

        return $this;
    }

    public function getSkils(): ?string
    {
        return $this->skils;
    }

    public function setSkils(string $skils): self
    {
        $this->skils = $skils;

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

    public function getTrueFalse(): ?int
    {
        return $this->trueFalse;
    }

    public function setTrueFalse(int $trueFalse): self
    {
        $this->trueFalse = $trueFalse;

        return $this;
    }

    public function getQAReponsetext(): ?string
    {
        return $this->QAReponsetext;
    }

    public function setQAReponsetext(?string $QAReponsetext): self
    {
        $this->QAReponsetext = $QAReponsetext;
        return $this;
    }

    public function getRandomOption(): ?int
    {
        return $this->randomOption;
    }

    public function setRandomOption(int $randomOption): self
    {
        $this->randomOption = $randomOption;

        return $this;
    }

    public function getReponseTure(): ?string
    {
        return $this->reponseTure;
    }

    public function setReponseTure(string $reponseTure): self
    {
        $this->reponseTure = $reponseTure;

        return $this;
    }

    public function getIdTypeQuestion(): ?int
    {
        return $this->idTypeQuestion;
    }

    public function setIdTypeQuestion(?int $idTypeQuestion): self
    {
        $this->idTypeQuestion = $idTypeQuestion;

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
