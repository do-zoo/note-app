import React from "react";
import NoteCard from "./NoteCard";
import { data } from "../../data";
import Button from "../atoms/Button";
import { AddIcon } from "../../assets/icon";

class NoteLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.createNote = this.createNote.bind(this);
  }

  createNote() {
    this.setState((prevState) => {
      return {
        ...prevState,
        data: [
          ...prevState.data,
          {
            id: uuidv4(),
            title: "",
            body: "",
            isArchive: false,
            isFresh: true,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  onSave = (id, note) => {
    const newData = this.state.data.map((item) => {
      if (item.id === id) {
        item.title = note.title;
        item.body = note.body;
        item.createdAt = new Date();
        item.archived = note.archived;
        item.isFresh = false;
      }
      return item;
    });
    this.setState(
      {
        data: newData,
      },
      () => {
        console.log(this.state.data);
      }
    );
  };

  onDelete = (id) => {
    const newData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newData });
  };

  render() {
    const archived = this.state.data.filter((item) => item.archived);
    const unArchived = this.state.data.filter((item) => !item.archived);
    archived.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    unArchived.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return (
      <div className="w-full overflow-hidden px-5 md:px-10 lg:px-20 py-4 pl-20 md:pl-64 lg:pl-64">
        {this.props.type !== "archive" && (
          <div className="flex justify-between gap-3 mb-6">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-3 pl-10 w-full text-sm md:w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Notes..."
                  required=""
                />
                <button
                  type="submit"
                  className="hidden text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>

            <Button
              icon={<AddIcon />}
              title="Create"
              className="bg-primary-color"
              onClick={this.createNote}
              mdHidden={true}
            />
          </div>
        )}
        <div className="note-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
          {this.props.type === "archive" && archived.length > 0 ? (
            archived.map((item) => (
              <NoteCard
                key={item.id}
                data={item}
                onSave={this.onSave}
                onDelete={this.onDelete}
              />
            ))
          ) : this.props.type === "unarchive" && unArchived.length > 0 ? (
            unArchived.map((item) => (
              <NoteCard
                key={item.id}
                data={item}
                onSave={this.onSave}
                onDelete={this.onDelete}
              />
            ))
          ) : (
            <p>
              {this.props.type === "archive" && "No archived note yet"}
              {this.props.type === "unarchive" && "No note yet"}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default NoteLists;

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
