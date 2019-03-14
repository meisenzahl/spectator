/*
* Copyright (c) 2019 Marvin Ahlgrimm (https://github.com/treagod)
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public
* License as published by the Free Software Foundation; either
* version 2 of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
* General Public License for more details.
*
* You should have received a copy of the GNU General Public
* License along with this program; if not, write to the
* Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
* Boston, MA 02110-1301 USA
*
* Authored by: Marvin Ahlgrimm <marv.ahlgrimm@gmail.com>
*/

namespace Spectator.Controllers {
    public class Collection {
        public Main main;
        private Gee.ArrayList<Models.Collection> collections;

        public Collection () {
            collections = new Gee.ArrayList<Models.Collection> ();
        }

        public void add_collection (Models.Collection collection) {
            collections.add (collection);
        }

        public void add_request_to_collection (Models.Collection collection, Models.Request request) {
            if (collections.contains (collection)) {
                collection.add_request (request);
            }
        }
    }
}