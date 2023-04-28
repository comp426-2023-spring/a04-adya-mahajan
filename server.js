

import {rpsNoArg} from "../lib/rpsls.js"
import {rpsArg} from "../lib/rpsls.js"
import {rpslsNoArg} from "../lib/rpsls.js"
import {rpslsArg} from "../lib/rpsls.js"
import minimist from "minimist"
import express from "express";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000; 