<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Question_model extends CI_Model {

    public function insert($quiz_id, $name){
        $this->db->insert('questions', ['quiz_id' => $quiz_id, 'name' => $name]);
        return $this->db->insert_id();
    }

    public function find($quiz_id){
        $data = $this->db->query("SELECT * FROM questions WHERE quiz_id = " . $quiz_id);
        return $data->result_array();
    }

    public function deleteByQuiz($quiz_id){
        $this->db->query("DELETE FROM questions WHERE quiz_id='".$quiz_id."'");
    }

}