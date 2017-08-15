<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mail extends CI_Controller
{

    public function add()
    {
        $data = $_POST;
        $files = $_FILES;

        $this->load->model(['message_model']);
        $id = $this->message_model->insert($data);

        if(isset($files['fileToUpload']))
            $this->uploadFiles($files['fileToUpload'], $id);
        return json_encode(['code' => 200]);
    }

    public function get() {
        $data = [];
        $this->load->model(['message_model']);
        $result = $this->message_model->getByEmail('victor@mev.ro');
        foreach($result as $key => $r){
            $result[$key]['files'] = $this->message_model->getFiles($r['id']);
        }

        echo json_encode($result);
    }

    private function uploadFiles($files, $id)
    {
        $this->load->helper('url');
        $uploaddir = 'public/uploads/'.$id;

        if (!file_exists($uploaddir)) {
            mkdir($uploaddir, 0777, true);
        }

        foreach ($files['tmp_name'] as $key => $file) {
            $filename = basename($files['name'][$key]);
            $uploadfile = $uploaddir . $filename;
            if (move_uploaded_file($files['tmp_name'][$key], $uploadfile)) {
                $this->load->model(['message_model']);
                $this->message_model->insertFile($filename, $id);
            }

        }
    }
}
