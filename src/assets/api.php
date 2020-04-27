<?php
header('Content-Type: application/json');
include '/home/ant/covid/error.php';
error_reporting(0);
set_error_handler("errorHandler");

// Wrapper array
$data = array();

// Status
$json = file_get_contents('https://covid19-api.vost.pt/Requests/get_status');
$obj = json_decode($json, true);

$data['status'] = $obj['status'];

// Last Update
$json = file_get_contents('https://covid19-api.vost.pt/Requests/get_last_update');
$obj = json_decode($json, true);

$data['latest'] = $obj;

// Get previous day
$currData = $obj['data'];
$yesterday = date('d-m-Y', strtotime($currData . ' -1 day'));

$json = file_get_contents('https://covid19-api.vost.pt/Requests/get_entry/' . $yesterday);
$obj = json_decode($json, true);
$arr = array();

// Clean up
function getLeaf($item, $key, $origKey)
{
    global $arr;
    $arr[$origKey] = $item;
}

foreach ($obj as $key => $value) {
    array_walk_recursive($value, 'getLeaf', $key);
}

$data['comparison'] = $arr;

echo json_encode($data);
