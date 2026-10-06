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

export interface BaseObject {
    position: Vector3;
    velocity: Vector3;
    force: Vector3;
    mass: number;
}
