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

import { world } from "@minecraft/server";

import { JhysixWorld } from "./engine/jhysixWorld.js";
import { Cube } from "./engine/objects/cube.js";
import { McJhysix } from "./minecraft/mcJhysixSync.js";

world.afterEvents.worldLoad.subscribe(() => {
    const jhysixWorld = new JhysixWorld();
    const cube = new Cube({ x: 0, y: 200, z: 0 }, 1);

    McJhysix.sync(jhysixWorld);
});
