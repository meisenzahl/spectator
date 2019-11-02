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

namespace Spectator.Dialogs.Collection {
    private class SortListRow : Gtk.Box {
        private Gtk.Button go_up;
        private Gtk.Button go_down;
        public bool _first;
        public bool first {
            get { return _first; }
            set {
                _first = value;

                go_up.sensitive = _first ? false : true;
            }
        }

        construct {
            orientation = Gtk.Orientation.HORIZONTAL;
            margin = 0;
        }

        public SortListRow (uint id, string name) {
            get_style_context ().add_class ("sort-row");
            var label = new Gtk.Label (name);
            label.justify = Gtk.Justification.LEFT;
            label.halign = Gtk.Align.START;
            label.margin_left = 5;

            go_up = new Gtk.Button.from_icon_name ("go-up-symbolic");
            go_up.can_focus = false;
            go_up.sensitive = false;     
            go_up.get_style_context ().add_class ("flat");
            go_down = new Gtk.Button.from_icon_name ("go-down-symbolic");
            go_down.can_focus = false;
            go_down.get_style_context ().add_class ("flat");

            pack_start (label, true, true);
            pack_end (go_up, false, false);
            pack_end (go_down, false, false);
        }
    }

    public class SortRequests : Gtk.Dialog {
        public signal void creation (Models.Collection collection);
        protected Gtk.Entry collection_name_entry;
        private DialogTitle dialog_title;
        private bool warning_active;
        private Gtk.ListBox list_box;

        public SortRequests (Gtk.ApplicationWindow parent, Models.Collection collection) {
            border_width = 5;
            set_size_request (425, 100);
            deletable = false;
            resizable = false;
            transient_for = parent;
            modal = true;
            warning_active = false;

            dialog_title = new DialogTitle (_(("Requests of %s").printf (collection.name)));
            list_box = new Gtk.ListBox ();
            list_box.selection_mode = Gtk.SelectionMode.NONE;

            for(var i = 0; i < collection.requests.size; i++) {
                var request = collection.requests.get (i);
                var row = new SortListRow (request.id, request.name);
                list_box.add (row);

                if (i == 0) {
                    row.first = false;
                }
            }

            add_button (_("Close"), Gtk.ResponseType.CLOSE);
            add_button (_("Create"), Gtk.ResponseType.APPLY);

            Gtk.Box hbox = new Gtk.Box (Gtk.Orientation.HORIZONTAL, 15);
            hbox.pack_start (list_box, true, true, 0);
            hbox.margin_bottom = 20;

            var content = get_content_area () as Gtk.Box;

            content.margin = 15;
            content.margin_top = 0;

            content.add (dialog_title);
            content.add (hbox);
            response.connect ((source, id) => {
                switch (id) {
                case Gtk.ResponseType.APPLY:

                    destroy  ();

                    break;
                case Gtk.ResponseType.CLOSE:
                    destroy ();
                    break;
                }
            });
        }

        private class DialogTitle : Gtk.Box {
            private Gtk.Image icon;
            private Gtk.Label label;

            public string title {
                get { return label.label; }
                set { label.label = value; }
            }

            public DialogTitle (string text) {
                icon = new Gtk.Image.from_icon_name ("folder", Gtk.IconSize.DIALOG);
                label = new Gtk.Label ("<b>" + text + "</b>");
                label.use_markup = true;
                label.get_style_context ().add_class ("dialog-title");
                label.xalign = 0;
                label.get_style_context ().add_class ("h2");

                pack_start (icon, false, true, 0);
                pack_start (label, true, true, 0);

                margin_bottom = 15;
            }
        }
    }
}
