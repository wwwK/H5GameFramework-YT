/*
 * Created at Tue Aug 06 2019 by clh
 * Contact <395942144@qq.com>
 *
 * The MIT License (MIT)
 * Copyright (c) 2019 clh
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* view子媒介基类,属于其他界面的子节点,viewComponent由get函数传入;
*/
var SubMediator = /** @class */ (function (_super) {
    __extends(SubMediator, _super);
    function SubMediator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubMediator.prototype.init = function (viewComponent) {
        if (viewComponent) {
            this.viewComponent = viewComponent;
        }
    };
    SubMediator.prototype.onCreateResourceLoader = function () {
        return null;
    };
    SubMediator.prototype.onCreateView = function () {
        return null;
    };
    return SubMediator;
}(BaseMediator));
//# sourceMappingURL=SubMediator.js.map