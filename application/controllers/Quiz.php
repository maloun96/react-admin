<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Quiz extends CI_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     *	- or -
     * 		http://example.com/index.php/welcome/index
     *	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function add()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $this->load->model(['quiz_model', 'question_model', 'answer_model']);
        $quiz_id = $this->quiz_model->insert($data['name']);

        foreach($data['questions'] as $question){
            $question_id = $this->question_model->insert($quiz_id, $question['name']);

            foreach($question['answers'] as $answer){
                $this->answer_model->insert($question_id, $answer);
            }
        }

        return json_encode(['code' => 200]);
    }

    public function all()
    {
        $this->load->model(['quiz_model', 'question_model', 'answer_model']);
        $data = $this->quiz_model->all();

//        foreach($data as $key => $d){
//            $data[$key]['questions'] = $this->question_model->find($d['id']);
//
//            foreach($data[$key]['questions'] as $key2 => $question) {
//                $data[$key]['questions'][$key2]['answers'] = $this->answer_model->find($question['id']);
//            }
//        }

        echo json_encode($data);
    }

    public function get($id){
        $this->load->model(['quiz_model', 'question_model', 'answer_model']);
        $data = $this->quiz_model->find($id)[0];
        $data['questions'] = $this->question_model->find($data['id']);

        foreach($data['questions'] as $key2 => $question) {
            $data['questions'][$key2]['answers'] = $this->answer_model->find($question['id']);
        }

        echo json_encode($data);
    }

    public function delete($id){
        $this->load->model(['quiz_model', 'question_model', 'answer_model']);
        $questions = $this->question_model->find($id);
        foreach($questions as $question){
            $this->answer_model->deleteByQuestion($question['id']);
        }
        $this->question_model->deleteByQuiz($id);
        $this->quiz_model->delete($id);
    }

    public function edit($id) {
        $this->delete($id);
        $this->add();
    }
}
