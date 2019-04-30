// This is the js for the default/index.html view.
var myFunction = function() {
  alert("You have successfully contacted the event organizer. You will be contacted shortly.");
};

var app = function() {

    var self = {};

    Vue.config.silent = false; // show all warnings

    // Extends an array
    self.extend = function(a, b) {
        for (var i = 0; i < b.length; i++) {
            a.push(b[i]);
        }
    };

    var myFunction = function() {
      alert("You have successfully contacted the event organizer. You will be contacted shortly.");
    };

    // Enumerates an array.

      var enumerate = function(v)
        { var k=0; return v.map(function(e) {
          e._idx = k++;




        });
      };
/*
    self.add_post = function () {
        // We disable the button, to prevent double submission.
        $.web2py.disableElement($("#add-post"));
        var sent_title = self.vue.event_form_title; // Makes a copy
        var sent_content = self.vue.event_form_content; //
        $.post(add_post_url,
            // Data we are sending.
            {
                post_title: self.vue.event_form_title,
                post_content: self.vue.event_form_content
            },
            // What do we do when the post succeeds?
            function (data) {
                // Re-enable the button.
                $.web2py.enableElement($("#add-post"));
                // Clears the form.
                self.vue.event_form_title = "";
                self.vue.event_form_content = "";
                // Adds the post to the list of posts.
                var new_post = {
                    id: data.post_id,
                    post_author: curr_user_email,
                    post_title: sent_title,
                    post_content: sent_content
                };
                self.vue.post_list.unshift(new_post);
                console.log("event added");
                // We re-enumerate the array.
                self.process_posts();
            });
        // If you put code here, it is run BEFORE the call comes back.
    };
*/



    self.get_events = function () {
        $.getJSON(get_events_list_url,
            function(data) {
                // I am assuming here that the server gives me a nice list
                // of posts, all ready for display.
                console.log("event_list: ", data.event_list);
                self.vue.event_list = data.event_list;
                console.log("the event", self.vue.event_list);
                // Post-processing.
                self.process_events();
                console.log("I got my list");
            }
        );
        console.log("I fired the get");
    };

    self.get_sports_events = function () {
        $.getJSON(get_sports_events_list_url,
            function(data) {
                // I am assuming here that the server gives me a nice list
                // of posts, all ready for display.
                console.log("event_list: ", data.sports_event_list);
                self.vue.sports_event_list = data.sports_event_list;
                console.log("the event", self.vue.sports_event_list);
                // Post-processing.
                self.process_sports_events();
                console.log("I got my list");
            }
        );
        console.log("I fired the get");
    };

    self.get_video_events = function () {
        $.getJSON(get_video_events_list_url,
            function(data) {
                // I am assuming here that the server gives me a nice list
                // of posts, all ready for display.
                console.log("event_list: ", data.video_event_list);
                self.vue.video_event_list = data.video_event_list;
                console.log("the event", self.vue.video_event_list);
                // Post-processing.
                self.process_video_events();
                console.log("I got my list");
            }
        );
        console.log("I fired the get");
    };

    self.get_board_events = function () {
        $.getJSON(get_board_events_list_url,
            function(data) {
                // I am assuming here that the server gives me a nice list
                // of posts, all ready for display.
                console.log("event_list: ", data.board_event_list);
                self.vue.board_event_list = data.board_event_list;
                console.log("the event", self.vue.event_list);
                // Post-processing.
                self.process_board_events();
                console.log("I got my list");
            }
        );
        console.log("I fired the get");
    };



    self.process_events = function () {
        // This function is used to post-process posts, after the list has been modified
        // or after we have gotten new posts.
        // We add the _idx attribute to the posts.
        enumerate(self.vue.event_list);
        //self.vue.event_list.map(function (e) {
        //    Vue.set(e, 'editing_event', false
        self.vue.post_list.map(function (e) {
            // I need to use Vue.set here, because I am adding a new watched attribute
            // to an object.  See https://vuejs.org/v2/guide/list.html#Object-Change-Detection-Caveats
            // The code below is commented out, as we don't have smiles any more.
            // Replace it with the appropriate code for thumbs.
            // // Did I like it?
            // // If I do e._smile = e.like, then Vue won't see the changes to e._smile .
            // Vue.set(e, '_smile', e.like);
            Vue.set(e, 'editing_event', false)



        });



    };




        self.process_sports_events = function () {
            // This function is used to post-process posts, after the list has been modified
            // or after we have gotten new posts.
            // We add the _idx attribute to the posts.
            enumerate(self.vue.sports_event_list);
            //self.vue.event_list.map(function (e) {
            //    Vue.set(e, 'editing_event', false
            self.vue.sports_event_list.map(function (e) {
                // I need to use Vue.set here, because I am adding a new watched attribute
                // to an object.  See https://vuejs.org/v2/guide/list.html#Object-Change-Detection-Caveats
                // The code below is commented out, as we don't have smiles any more.
                // Replace it with the appropriate code for thumbs.
                // // Did I like it?
                // // If I do e._smile = e.like, then Vue won't see the changes to e._smile .
                // Vue.set(e, '_smile', e.like);
                Vue.set(e, 'editing_event', false)



            });
        };

        self.process_board_events = function () {
                // This function is used to post-process posts, after the list has been modified
                // or after we have gotten new posts.
                // We add the _idx attribute to the posts.
                enumerate(self.vue.board_event_list);
                //self.vue.event_list.map(function (e) {
                //    Vue.set(e, 'editing_event', false
                self.vue.board_event_list.map(function (e) {
                    // I need to use Vue.set here, because I am adding a new watched attribute
                    // to an object.  See https://vuejs.org/v2/guide/list.html#Object-Change-Detection-Caveats
                    // The code below is commented out, as we don't have smiles any more.
                    // Replace it with the appropriate code for thumbs.
                    // // Did I like it?
                    // // If I do e._smile = e.like, then Vue won't see the changes to e._smile .
                    // Vue.set(e, '_smile', e.like);
                    Vue.set(e, 'editing_event', false)



                });
            };

            self.process_video_events = function () {
                    // This function is used to post-process posts, after the list has been modified
                    // or after we have gotten new posts.
                    // We add the _idx attribute to the posts.
                    enumerate(self.vue.video_event_list);
                    //self.vue.event_list.map(function (e) {
                    //    Vue.set(e, 'editing_event', false
                    self.vue.video_event_list.map(function (e) {
                        // I need to use Vue.set here, because I am adding a new watched attribute
                        // to an object.  See https://vuejs.org/v2/guide/list.html#Object-Change-Detection-Caveats
                        // The code below is commented out, as we don't have smiles any more.
                        // Replace it with the appropriate code for thumbs.
                        // // Did I like it?
                        // // If I do e._smile = e.like, then Vue won't see the changes to e._smile .
                        // Vue.set(e, '_smile', e.like);
                        Vue.set(e, 'editing_event', false)

                    });

        //});

    };

    self.add_event= function () {
        var to_send_event_title = self.vue.event_form_title;
        var to_send_event_content = self.vue.event_form_content;
        var to_send_creator_name = self.vue.creator_name;
        var to_send_creator_email = self.vue.creator_email;
        var to_send_event_category = self.vue.event_form_category;
        console.log("I got my list");
        $.web2py.disableElement($("#add-event"));
        $.post(add_event_url,
            // Data we are sending.
            {

                event_title: self.vue.event_form_title,
                event_content: self.vue.event_form_content,
                creator_email: curr_user_email,
                creator_name: curr_user_first_name,
                event_category: self.vue.event_form_category,
                size_limit: 4

            },
            // What do we do when the post succeeds?
            function (data) {
                $.web2py.enableElement($("#add-event"));
                // Clears the form.
                self.vue.event_form_title = "";
                self.vue.event_form_content = "";
                self.vue.event_form_category = "";
                // Adds the post to the list of posts.
                var new_event = {
                    id: data.event_id,
                    event_title: to_send_event_title,
                    event_content: to_send_event_content,

                    creator_name: to_send_creator_name,
                    creator_email: to_send_creator_email,
                    event_category: to_send_event_category,

                };

                if (to_send_event_category == 'Sports'){
                  self.vue.sports_event_list.unshift(new_event);
                  //self.process_sports_events();
                }
                else if(to_send_event_category == 'Video Games')
                {
                  self.vue.video_event_list.unshift(new_event);
                  //self.process_video_events();
                }
                else if(to_send_event_category == 'Board Games')
                {
                  self.vue.board_event_list.unshift(new_event);
                  //self.process_board_events();
                }
                self.vue.event_list.unshift(new_event);


                self.get_events();
                self.get_sports_events();
                self.get_video_events();
                self.get_board_events();
            });
        // If you put code here, it is run BEFORE the call comes back.

    };






    // Complete as needed.
    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            display_event_form: false,
            event_form_title: "",
            event_form_category: "",
            event_form_content: "",
            post_list: [],
            event_list: [],
            sports_event_list: [],
            video_event_list: [],
            board_event_list: [],



        },
        methods: {
            add_post: self.add_post,
            toggle_form: function(){
                this.display_event_form = !this.display_event_form;
            },
            add_event: self.add_event,





        }

    });

    // If we are logged in, shows the form to add posts.
    if (is_logged_in) {

        $("#add_event").show();
        self.get_events();
        self.get_sports_events();
        self.get_board_events();
        self.get_video_events();

    }


    // Gets the posts.
    //self.get_posts();

    return self;
};

var APP = null;

// No, this would evaluate it too soon.
// var APP = app();

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});
