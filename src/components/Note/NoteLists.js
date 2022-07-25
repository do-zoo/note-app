import React from "react";
import NoteCard from "./NoteCard";
import Button from "../atoms/Button";
import { AddIcon } from "../../assets/icon";
import { SearchInput } from "../atoms/Input";
import { getInitialData } from "../../utils";

class NoteLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      dataSearch: [],
      isSearch: false,
      maxLengthInput: 50,
      inputValue: "",
    };
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.createNote = this.createNote.bind(this);
    this.onSearch = this.onSearch.bind(this);
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
    this.setState((prevState) => {
      return {
        ...prevState,
        data: newData,
      };
    });
  };

  onDelete = (id) => {
    const newData = this.state.data.filter((item) => item.id !== id);
    this.setState((prevState) => {
      return {
        ...prevState,
        data: newData,
      };
    });
  };

  onSearch = (e) => {
    const searchValue = e.target.value;
    const charLength = searchValue.length;
    if (charLength <= 50) {
      this.setState((prevState) => {
        return {
          ...prevState,
          inputValue: searchValue.slice(0, 50),
        };
      });

      if (searchValue === "") {
        this.setState((prevState) => {
          return {
            ...prevState,
            isSearch: false,
            maxLengthInput: 50,
          };
        });
      } else {
        const newData = this.state.data.filter((item) => {
          return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        this.setState((prevState) => {
          return {
            ...prevState,
            isSearch: true,
            dataSearch: newData,
            maxLengthInput: 50 - charLength,
          };
        });
      }
    }
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
            <SearchInput
              onSearch={this.onSearch}
              isSearch={this.state.isSearch}
              char={this.state.maxLengthInput}
              value={this.state.inputValue}
            />
            <div>
              <Button
                icon={<AddIcon />}
                title="Create"
                className="bg-primary-color h-[46px] w-full"
                onClick={this.createNote}
                mdHidden={true}
              />
            </div>
          </div>
        )}
        <div className="note-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
          {this.state.isSearch ? (
            this.state.dataSearch.map((item) => {
              return (
                <NoteCard
                  key={item.id}
                  data={item}
                  onSave={this.onSave}
                  onDelete={this.onDelete}
                />
              );
            })
          ) : this.props.type === "archive" && archived.length > 0 ? (
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
//         </div>
//       </div>
//     );
//   }
// }

export default NoteLists;

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
