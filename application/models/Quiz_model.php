<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Quiz_model extends CI_Model {

    public function insert($name){
        $this->db->insert('quiz', ['name' => $name]);
        return $this->db->insert_id();
    }

    public function all() {
        $data = $this->db->query("SELECT * FROM quiz");
        return $data->result_array();
    }

    public function find($id) {
        $data = $this->db->query("SELECT * FROM quiz WHERE id='".$id."' LIMIT 1");
        return $data->result_array();
    }

    public function delete($id){
        $this->db->query("DELETE FROM quiz WHERE id='".$id."'");
    }
}