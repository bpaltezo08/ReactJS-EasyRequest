import React from 'react';
import { MDBCol } from 'mdbreact'
import { connect } from 'react-redux';
import axios from 'axios';

export default function eRequest(method, url, headers, params, body) {

  let token = localStorage.getItem('auth-token')
  let userLevel = localStorage.getItem('user-level')
  let area_code = localStorage.getItem('area_code')

  if (headers == null) {
    headers = {
      "Authorization": token,
    }
  } else {
    headers = {
      "Authorization": token,
      area_code: area_code
    }
  }

  params.area_code = area_code;
  params.user_level = userLevel;

  console.log("Request url: ", url);
  console.log("Request params: ", params);
  console.log("Request headers: ", headers);

  return axios({
    method: method,
    url: url,
    responseType: 'json',
    headers: headers,
    params: params,
    data: body
  })
}
