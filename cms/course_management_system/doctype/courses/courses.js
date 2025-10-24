// Copyright (c) 2025, Abhi and contributors
// For license information, please see license.txt

//frappe.ui.form.on('Courses', {
//	refresh: function(frm) {
//		frappe.msgprint("Wel-Come to course");
//	},

    	//onload: function(frm) {
        //	if(frm.doc.owner) {
        //    		frappe.call({
          //      		method: "frappe.client.get_value",
            //    		args: {
              //      			doctype: "User",
                //    			refresh: function(frm) {
                  //  			fieldname: ["full_name"]
                //		},
                //		callback: function(r) {
                  //  			if(r.message) {
                    //    			frm.set_df_property("created_by", "read_only", 1);
                      //  			frm.set_value("created_by", r.message.full_name);
                    	//		}
                	//	}
            		//});
        	//}
    	//},

    	//refresh: function(frm) {
        	// Show buy button only for students
        //	if (frappe.user_roles.includes("Student")) {
         //   		frm.add_custom_button(__('Buy Course'), function() {
           //     		frappe.call({
             //       			method: "frappe.client.insert",
               //     			args: {
                 //       			doc: {
                   //         				doctype: "Enrollments",
                     //       				course: frm.doc.name,
                       //     				student: frappe.session.user,
                         //   				status: "Requested"
                        //			}
                    	//		},
                    	//		callback: function(r) {
                        //			if (!r.exc) {
                          //  				frappe.msgprint("Enrollment created successfully. Waiting for teacher approval.");
                        //			}
                    	//		}
                	//	});
                	//}).addClass("btn-primary");
        	//}
    	//}
//});


