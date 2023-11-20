// ConfirmDeletePostModal.tsx

import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { IPost } from '../landing-page/recent-posts/RecentPosts';

interface ConfirmDeletePostModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  post: IPost;
  onDelete: () => void;
}

function ConfirmDeletePostModal({
  openModal,
  setOpenModal,
  post,
  onDelete,
}: ConfirmDeletePostModalProps) {
  const handleDelete = () => {
    onDelete();
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        show={openModal}
        size='md'
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              <p>Are you sure you want to delete this post?</p>
              <h6 className='font-semibold'>
                Title: <span className='text-red-700'>{post.title}</span>
              </h6>
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDelete}>
                {"Yes, I'm sure"}
              </Button>
              <Button color='gray' onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmDeletePostModal;
