import { Box, IconButton } from '@chakra-ui/core';
import React from 'react';
import NextLink from 'next/link';
import { useDeletePostMutation, useMeQuery } from '../generated/graphql';

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
}

const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId,
}) => {
  const { data: meData } = useMeQuery();
  const [deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Box>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton ml="auto" mr={4} icon="edit" aria-label="Edit Post" />
      </NextLink>
      <IconButton
        icon="delete"
        aria-label="Delete Post"
        onClick={() => {
          deletePost({ variables: { id } });
        }}
      />
    </Box>
  );
};

export default EditDeletePostButtons;
