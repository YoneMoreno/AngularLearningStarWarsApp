import {Injectable} from "@angular/core";
import {Http, Response } from "@angular/http";
import {Observable} from "rxjs/Observable";

import {Character} from "./character.model";
import {CONFIG, ExceptionService, MessageService, SpinnerService} from '../core';
