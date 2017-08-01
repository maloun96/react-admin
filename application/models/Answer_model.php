<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Answer_model extends CI_Model {

    public function insert($quesiton_id, $data){
        $this->db->insert('answers', ['question_id' => $quesiton_id, 'name' => $data['name'], 'correct' => $data['correct']]);
        return $this->db->insert_id();
    }

    public function find($question_id){
        $data = $this->db->query("SELECT * FROM answers WHERE question_id = " . $question_id);
        return $data->result_array();
    }

    public function deleteByQuestion($question_id){
        $this->db->query("DELETE FROM answers WHERE question_id='".$question_id."'");
    }

}