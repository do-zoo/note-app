import React from "react";
import {
  ArchiveIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  MoreIcon,
  SaveIcon,
  UnArchiveIcon,
} from "../../assets/icon";
import { ButtonIcon } from "../atoms/Button";

class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: this.props.data.isFresh ?? false,
      isHeaderOpen: this.props.data.isFresh ?? false,
      inputTitle: "",
      inputBody: "",
    };

    this.toggleHeader = this.toggleHeader.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onInputTitleChange = this.onInputTitleChange.bind(this);
    this.onInputBodyChange = this.onInputBodyChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
  }

  toggleHeader() {
    if (this.props.data.isFresh) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isHeaderOpen: !prevState.isHeaderOpen,
          isEdit: false,
        };
      });
      this.onDelete(this.props.data.id);
    } else if (this.state.isEdit) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isHeaderOpen: !prevState.isHeaderOpen,
          isEdit: false,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isHeaderOpen: !prevState.isHeaderOpen,
        };
      });
    }
  }

  toggleEdit() {
    this.setState((prevState) => {
      return {
        ...prevState,
        isEdit: !prevState.isEdit,
      };
    });
  }

  onInputTitleChange(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        inputTitle: e.target.value,
      };
    });
  }

  onInputBodyChange(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        inputBody: e.target.textContent,
      };
    });
  }

  onSave() {
    const { state, props } = this;
    const note = {
      ...props.data,
      title: state.inputTitle !== "" ? state.inputTitle : props.data.title,
      body: state.inputBody !== "" ? state.inputBody : props.data.body,
      isFresh: false,
    };

    this.props.onSave(this.props.data.id, note);
    this.toggleHeader();
  }

  onArchive() {
    const { props } = this;
    const note = {
      ...props.data,
      archived: !props.data.archived,
      isFresh: false,
    };
    this.props.onSave(this.props.data.id, note);
  }

  onDelete() {
    this.props.onDelete(this.props.data.id);
  }

  render() {
    const { isEdit, isHeaderOpen, inputBody, inputTitle } = this.state;
    const newData = this.props.data;

    return (
      <div className="note-card">
        <div className="card bg-secondary-color rounded-xl text-base-color overflow-hidden w-full">
          <CardHeader
            isHeaderOpen={isHeaderOpen}
            toggleHeader={this.toggleHeader}
            isEdit={isEdit}
            toggleEdit={this.toggleEdit}
            onSave={this.onSave}
            onDelete={this.onDelete}
            onArchive={this.onArchive}
            disabledSave={
              this.props.data.isFresh && (inputTitle === "" || inputBody === "")
            }
            isArchived={this.props.data.archived}
          />
          <CardBody
            isEdit={isEdit}
            data={newData}
            onInputTitle={this.onInputTitleChange}
            onInputBody={this.onInputBodyChange}
          />
          <CardFooter
            author={newData.author}
            mode={isEdit ? "mode edit" : "mode baca"}
            date={getDateFormat(newData.createdAt)}
            isArchived={newData.archived}
          />
        </div>
      </div>
    );
  }
}

export default NoteCard;

const CardHeader = ({
  isHeaderOpen,
  isEdit,
  toggleHeader,
  toggleEdit,
  onSave,
  onDelete,
  onArchive,
  disabledSave,
  isArchived,
}) => {
  return (
    <div
      className={`flex items-center justify-between px-2 py-1`}
      style={{
        backgroundColor: isHeaderOpen ? "#DFF6FF" : "transparent",
      }}
    >
      <div className="note-action flex items-center gap-2">
        {isHeaderOpen && (
          <>
            {isEdit ? (
              <ButtonIcon
                icon={<SaveIcon title="Save" />}
                onClick={onSave}
                disabled={disabledSave}
              />
            ) : (
              <>
                <ButtonIcon
                  icon={<EditIcon title="Edit" />}
                  onClick={toggleEdit}
                />
                {isArchived ? (
                  <ButtonIcon
                    icon={<UnArchiveIcon title="UnArchive" />}
                    onClick={onArchive}
                  />
                ) : (
                  <ButtonIcon
                    icon={<ArchiveIcon title="Archive" />}
                    onClick={onArchive}
                  />
                )}
                <ButtonIcon
                  icon={
                    <DeleteIcon title="Delete" className="text-[#F34A4A]" />
                  }
                  onClick={onDelete}
                />
              </>
            )}
          </>
        )}
      </div>
      <div className="toggle-header flex items-center">
        {isHeaderOpen ? (
          <ButtonIcon icon={<CloseIcon />} onClick={toggleHeader} />
        ) : (
          <ButtonIcon icon={<MoreIcon />} onClick={toggleHeader} />
        )}
      </div>
    </div>
  );
};

const CardBody = ({ isEdit, data, onInputTitle, onInputBody }) => {
  return (
    <div className="px-4 pb-4 ">
      <div className="note-title">
        {isEdit ? (
          <input
            type="text"
            className="bg-transparent w-full text-xl font-bold focus:outline-none placeholder:text-[#796E5F]"
            placeholder="Input title here..."
            defaultValue={data.title ?? ""}
            onChange={onInputTitle}
          />
        ) : (
          <h1 className="text-xl font-bold">{data.title}</h1>
        )}
      </div>
      <div className="note-detail">
        {isEdit ? (
          <span
            dangerouslySetInnerHTML={{ __html: data.body ?? "" }}
            // ={data.body ?? ""}
            spellCheck="false"
            role="textbox"
            contentEditable="true"
            className="bg-transparent w-full focus:outline-none placeholder:text-[#796E5F] empty:before:content-['Input_text_here...'] empty:before:text-[#796E5F] block cursor-text"
            style={{
              minHeight: "40px",
            }}
            placeholder="Details"
            onInput={onInputBody}
          />
        ) : (
          <p>{data.body}</p>
        )}
      </div>
    </div>
  );
};

const CardFooter = ({ mode, date, isArchived }) => {
  return (
    <div className="flex items-center justify-between px-2 py-1 bg-tertiary-color text-quaternary-color font-light text-sm">
      <p>
        {mode}
        {isArchived ? (
          <span className="text-red-color"> {"(Archived)"}</span>
        ) : (
          ""
        )}
      </p>
      <p>{date}</p>
    </div>
  );
};

function getDateFormat(date) {
  const newDate = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateFormat = newDate.toLocaleDateString("id-ID", options);
  return dateFormat;
}
