/*
 * @Author: Shaun.Zhang
 * @Date: 2019-04-27 21:31:08
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-27 22:50:10
 */
import Vue from "vue";

import { post, get } from "./../../plugins/axios";
import axios from "./../../plugins/axios";

export const apiCreateOrder = params => {
  return post("express-delivery/index.php/Order/createOrder", params);
};
