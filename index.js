// GitHub custom action to check if the triggered time is within the specified maintainance window

import * as core from '@actions/core';

async function run() {
  try {
    const time = new Date().getHours();
    const start = core.getInput('maintainanceWindowStart');
    const end = core.getInput('maintainanceWindowEnd');
    const withinWindow = time >= start && time <= end;
    core.setOutput('withinWindow', withinWindow);
  } catch (error) {
    core.setFailed(error.message);
  }
}
