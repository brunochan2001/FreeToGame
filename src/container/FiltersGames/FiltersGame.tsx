import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@mui/material';
import { getGames } from '../../store/actions';
import { AppThunkDispatch, RootState } from '../../store/storeConfig';
import { SearchBar, CustomSelect } from '../../components';
import { Game } from '../../lib/types';
import { categoryOptions, platformOptions } from '../../lib/options';
import { useDebounce } from 'react-use';

interface Form {
  category: string;
  platform: string;
}

interface Props {
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
}

const FiltersGame: React.FC<Props> = ({ setGames }) => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { data } = useSelector((state: RootState) => state.games);
  const [name, setName] = useState<string>('');
  const [form, setForm] = useState<Form>({
    category: '',
    platform: ''
  });

  useEffect(() => {
    getGamesWithGenderPlataform();
  }, [form]);

  useDebounce(
    () => {
      searchGamesWithName(name);
    },
    400,
    [name]
  );

  const handleGender = (option: any) => {
    setForm({ ...form, category: option.value });
  };

  const handlePlataform = (option: any) => {
    setForm({ ...form, platform: option.value });
  };

  const handleInputName = (value: string) => {
    setName(value);
  };

  const getGamesWithGenderPlataform = () => {
    let values = {};
    for (const property in form) {
      if (form[property as keyof Form]) {
        values = { ...values, [property]: form[property as keyof Form] };
      }
    }
    dispatch(getGames(values));
  };

  const searchGamesWithName = (value: string) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue.length) {
      setGames(data);
    }
    const filterGames = data.filter((item: Game) =>
      item.title.toLocaleLowerCase().includes(lowerCaseValue)
    );
    setGames(filterGames);
  };

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <SearchBar onChange={handleInputName} value={name} />
        </Grid>
        <Grid item xs={6} md={3}>
          <CustomSelect
            label="Gender"
            value={form.category}
            options={categoryOptions}
            onChange={handleGender}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CustomSelect
            label="Platform"
            value={form.platform}
            options={platformOptions}
            onChange={handlePlataform}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FiltersGame;
