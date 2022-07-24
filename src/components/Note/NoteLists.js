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
    return (
      <div className="w-full overflow-hidden px-5 md:px-10 lg:px-20 py-4">
        {this.props.type !== "archive" && (
          <div className="flex justify-end mb-6">
            <Button
              icon={<AddIcon />}
              title="Create"
              className="bg-primary-color"
              onClick={this.createNote}
            />
          </div>
        )}
        <div className="note-container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 ">
          {this.props.type === "archive"
            ? this.state.data
                .filter((item) => item.archived)
                .map((item) => (
                  <NoteCard
                    key={item.id}
                    data={item}
                    onSave={this.onSave}
                    onDelete={this.onDelete}
                  />
                ))
            : this.state.data
                .filter((item) => !item.archived)
                .map((item) => (
                  <NoteCard
                    key={item.id}
                    data={item}
                    onSave={this.onSave}
                    onDelete={this.onDelete}
                  />
                ))}
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
