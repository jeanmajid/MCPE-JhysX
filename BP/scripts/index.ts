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

const BLOCK_ENTITY_TYPE_ID = "jeanmajid:block_entity";
type Entities = typeof BLOCK_ENTITY_TYPE_ID;

world.afterEvents.worldLoad.subscribe(() => {
    respawn();
});

function respawn() {
    const overworld = world.getDimension("overworld");
    for (const entity of overworld.getEntities({ type: BLOCK_ENTITY_TYPE_ID })) {
        entity.remove();
    }

    const entity = overworld.spawnEntity<Entities>(BLOCK_ENTITY_TYPE_ID, { x: 2542.5, y: 111.5, z: 2901.5 });
    entity.runCommand("/replaceitem entity @s slot.weapon.mainhand 0 planks");
}
