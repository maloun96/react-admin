<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Message_model extends CI_Model {

    public function insert($data){
        $this->db->insert('messages', [
            'email_to' => $data['to'],
            'subject' => $data['subject'],
            'text' => $data['text'],
            'viewed' => false,
            'added_at' => date('Y-m-d H:i:s')
        ]);
        return $this->db->insert_id();
    }

    public function insertFile($filename, $id){
        $this->db->insert('files', [
            'message_id' => $id,
            'name' => $filename
        ]);
        return $this->db->insert_id();
    }

    public function getByEmail($email) {
        $data = $this->db->query("SELECT * FROM messages WHERE email_to='".$email."'");
        return $data->result_array();
    }

    public function getFiles($id){
        $data = $this->db->query("SELECT * FROM files WHERE message_id='".$id."'");
        return $data->result_array();
    }

    public function find($quiz_id){
        $data = $this->db->query("SELECT * FROM questions WHERE quiz_id = " . $quiz_id);
        return $data->result_array();
    }

    public function deleteByQuiz($quiz_id){
        $this->db->query("DELETE FROM questions WHERE quiz_id='".$quiz_id."'");
    }

}