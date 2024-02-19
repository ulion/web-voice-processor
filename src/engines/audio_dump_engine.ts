/*
  Copyright 2022 Picovoice Inc.

  You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
  file accompanying this source.

  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
  an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
  specific language governing permissions and limitations under the License.
*/

import { WvpMessageEvent } from '../types';

export class AudioDumpEngine {
  private _buffers: Array<Int16Array> = [];

  onmessage(e: MessageEvent<WvpMessageEvent>): void {
    switch (e.data.command) {
      case 'process':
        this._buffers.push(e.data.inputFrame);
        break;
      default:
    }
  }

  onend(): Blob {
    return new Blob(this._buffers);
  }
}
