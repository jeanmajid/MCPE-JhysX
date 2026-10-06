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

import { Vector3 } from "../types/vector.js";
import { BaseObject } from "./base.js";

export class Cube implements BaseObject {
    // TODO move stuff to a base class maybe, so we can have methods like add force
    public position: Vector3;
    public mass: number;
    public rotation: Vector3 = { x: 0, y: 0, z: 0 };
    public velocity: Vector3 = { x: 0, y: 0, z: 0 };
    public force: Vector3 = { x: 0, y: 0, z: 0 };

    public constructor(position: Vector3, mass: number) {
        this.position = position;
        this.mass = mass;
    }
}
