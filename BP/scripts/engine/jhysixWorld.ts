/* SPDX-License-Identifier: GPL-3.0-or-later
 * ============================================================================
 * MCPE-Jhysix
 * Copyright (C) 2026 jeanmajid and contributors
 * https://github.com/jeanmajid/MCPE-Commands-plus-plus
 * ============================================================================
 *
 * This file is part of MCPE-Jhysix.
 *
 * MCPE-Jhysix is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * MCPE-Jhysix is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with MCPE-Jhysix. If not, see <https://www.gnu.org/licenses/>.
 */

import { BaseObject } from "./objects/base";
import { Vector3 } from "./types/vector";
import { Vector } from "./utils/vector";

export class JhysixWorld {
    private objects: Array<BaseObject> = [];
    public gravity: Vector3 = { x: 0, y: 9.81, z: 0 };

    constructor() {}

    addObject(object: BaseObject): void {
        this.objects.push(object);
    }

    tick(deltaTime: number): void {
        for (const object of this.objects) {
            object.force = Vector.add(object.force, Vector.multiply(this.gravity, object.mass));

            object.velocity = Vector.add(object.velocity, Vector.multiply(Vector.divide(object.force, object.mass), deltaTime));
            object.position = Vector.add(object.position, Vector.multiply(object.velocity, deltaTime));

            object.force = { x: 0, y: 0, z: 0 };
        }
    }
}
