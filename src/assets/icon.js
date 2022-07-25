import React from "react";

export function AddIcon({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ArchiveIcon({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
      <path
        fillRule="evenodd"
        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function UnArchiveIcon({ className, title }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-5 w-5 ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d="M4 3C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5C2 5.53043 2.21071 6.03914 2.58579 6.41421C2.96086 6.78929 3.46957 7 4 7H16C16.5304 7 17.0391 6.78929 17.4142 6.41421C17.7893 6.03914 18 5.53043 18 5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3H4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8H3V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H11.8521C11.6906 16.8812 11.5373 16.7497 11.3938 16.6062C10.6436 15.8561 10.2222 14.8386 10.2222 13.7778C10.2222 13.1551 10.3674 12.5475 10.639 12H9C8.73478 12 8.48043 11.8946 8.29289 11.7071C8.10536 11.5196 8 11.2652 8 11C8 10.7348 8.10536 10.4804 8.29289 10.2929C8.48043 10.1054 8.73478 10 9 10H11C11.2652 10 11.5196 10.1054 11.7071 10.2929C11.7783 10.3641 11.8377 10.445 11.8839 10.5324C12.5605 10.0449 13.3776 9.77778 14.2222 9.77778C15.2594 9.77778 16.255 10.1806 17 10.8996V8Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2222 17.3333C15.1652 17.3333 16.0696 16.9587 16.7364 16.2919C17.4032 15.6251 17.7778 14.7208 17.7778 13.7778C17.7778 12.8348 17.4032 11.9304 16.7364 11.2636C16.0696 10.5968 15.1652 10.2222 14.2222 10.2222C13.2792 10.2222 12.3749 10.5968 11.7081 11.2636C11.0413 11.9304 10.6667 12.8348 10.6667 13.7778C10.6667 14.7208 11.0413 15.6251 11.7081 16.2919C12.3749 16.9587 13.2792 17.3333 14.2222 17.3333ZM13.5852 12.0744C13.6373 12.122 13.6666 12.1866 13.6666 12.2539C13.6666 12.3213 13.6373 12.3859 13.5852 12.4335L12.9483 13.0158H14.5C15.0157 13.0158 15.5103 13.2031 15.8749 13.5365C16.2396 13.87 16.4444 14.3221 16.4444 14.7936V15.3016C16.4444 15.3689 16.4152 15.4335 16.3631 15.4812C16.311 15.5288 16.2403 15.5556 16.1667 15.5556C16.093 15.5556 16.0223 15.5288 15.9702 15.4812C15.9181 15.4335 15.8889 15.3689 15.8889 15.3016V14.7936C15.8889 14.4569 15.7425 14.1339 15.4821 13.8957C15.2216 13.6576 14.8683 13.5238 14.5 13.5238H12.9483L13.5852 14.1061C13.6118 14.1296 13.6329 14.1576 13.6475 14.1886C13.662 14.2196 13.6697 14.2529 13.67 14.2866C13.6703 14.3203 13.6633 14.3538 13.6493 14.385C13.6354 14.4162 13.6148 14.4446 13.5887 14.4684C13.5626 14.4923 13.5316 14.5111 13.4974 14.5239C13.4633 14.5367 13.4267 14.5431 13.3898 14.5428C13.353 14.5425 13.3165 14.5355 13.2826 14.5222C13.2487 14.5089 13.2181 14.4895 13.1924 14.4653L12.0813 13.4494C12.0292 13.4017 12 13.3372 12 13.2698C12 13.2025 12.0292 13.1379 12.0813 13.0903L13.1924 12.0744C13.2445 12.0268 13.3152 12 13.3888 12C13.4625 12 13.5331 12.0268 13.5852 12.0744V12.0744Z"
      />
    </svg>
  );
}

export function DeleteIcon({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function EditIcon({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
      <path
        fillRule="evenodd"
        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CloseIcon({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function MoreIcon({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

export function SaveIcon({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
    </svg>
  );
}

export function LightBlub({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
  );
}

export function IconMenu({ className, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
