import React, { useCallback } from 'react'
import { Box, Text, Image } from 'goods-core'
import {
  actionsType,
  useAppContext,
} from '@kitabisa/context/app.context'
import CampaignList from './campaign/list'

const useHome = () => {
  const [{ sortActive }, dispatch] = useAppContext()

  const onSorting = useCallback(
    id => () => {
      dispatch({
        type: actionsType.SORT_BY,
        payload: {
          sortActive: id !== sortActive ? id : 'order',
        },
      })
    },
    [sortActive]
  )

  return {
    sortActive,
    onSorting,
  }
}

const HomePage = () => {
  const { sortActive, onSorting } = useHome()
  return (
    <Box w p='m'>
      <Box
        as='header'
        fDir={{ xs: 'column', lg: 'row' }}
        fJustify='space-between'
        fAlign={{ xs: 'flex-start', lg: 'center' }}
        mb={{ xs: 'l', lg: '64px' }}
      >
        <Box fDir='row' fAlign='center' mb={{ xs: 'm', lg: '0' }}>
          <Image
            src={require('@kitabisa/assets/images/logo.png')}
            objectFit='contain'
            b='1px solid'
            bC='blue50'
            radius='full'
            mr='s'
            w='62px'
            h='62px'
            alt='Kitabisa'
          />
          <Text rule='title' weight='bold'>
            Kitabisa
          </Text>
        </Box>
        <Box>
          <Box
            bg={
              sortActive === 'donation_target' ? 'blue50' : 'black30'
            }
            py='xs'
            px='s'
            radius='m'
            cursor='pointer'
            onClick={onSorting('donation_target')}
            mb='s'
          >
            <Text c='white10'>Sorting by Donation Goal</Text>
          </Box>

          <Box
            bg={
              sortActive === 'days_remaining' ? 'blue50' : 'black30'
            }
            py='xs'
            px='s'
            radius='m'
            cursor='pointer'
            onClick={onSorting('days_remaining')}
          >
            <Text c='white10'>Sorting by Days Left</Text>
          </Box>
        </Box>
      </Box>
      <CampaignList />
    </Box>
  )
}

export default HomePage
