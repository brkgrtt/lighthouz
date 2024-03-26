/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Ensures `<video>` elements have closed captions.
 * See base class in axe-audit.js for audit() implementation.
 */

import AxeAudit from './axe-audit.js';
import * as i18n from '../../lib/i18n/i18n.js';

const UIStrings = {
  /** Title of an accesibility audit that evaluates if all video elements contain a child track element that has captions describing their audio. This title is descriptive of the successful state and is shown to users when no user action is required. */
  title: '`<video>` elements contain a `<track>` element with `[kind="captions"]`',
  /** Title of an accesibility audit that evaluates if all video elements contain a child track element that has captions describing their audio. This title is descriptive of the failing state and is shown to users when there is a failure that needs to be addressed. */
  failureTitle: '`<video>` elements do not contain a `<track>` element ' +
      'with `[kind="captions"]`.',
  /** Description of a Lighthouse audit that tells the user *why* they should try to pass. This is displayed after a user expands the section to see more. No character length limits. The last sentence starting with 'Learn' becomes link text to additional documentation. */
  description: 'When a video provides a caption it is easier for deaf and hearing impaired ' +
      'users to access its information. ' +
      '[Learn more about video captions](https://dequeuniversity.com/rules/axe/4.9/video-caption).',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);

class VideoCaption extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'video-caption',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      scoreDisplayMode: AxeAudit.SCORING_MODES.INFORMATIVE,
      requiredArtifacts: ['Accessibility'],
    };
  }
}

export default VideoCaption;
export {UIStrings};
