import React, { Component } from 'react';
const AddPost = () => (
    <div className="container">
        <div className="row">
            <h1 className="center-align">NEW POST</h1>

            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Post title" id="first_name2" type="text" class="validate" />
                    <label class="active" for="first_name2">Title</label>
                </div>
            </div>

            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <label for="textarea1">Content</label>
                        <div class="input-field col s12">

                            <textarea id="textarea1" class="materialize-textarea"></textarea>

                        </div>
                    </div>
                </form>
                <button class="btn waves-effect waves-light" type="submit" name="action">Cancel
    <i class="material-icons right">cancel</i>
                </button>
                <button class="btn waves-effect  waves-light" type="submit" name="action">Save
    <i class="material-icons right">save</i>
                </button>
            </div>


        </div>
    </div>
);
export default AddPost;
