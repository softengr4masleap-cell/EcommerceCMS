'use client';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {
    DataGrid,
    GridActionsCellItem,
    GridRowEditStopReasons,
    GridRowModes,
    GridToolbarContainer,
} from '@mui/x-data-grid';
import axios from 'axios';
import * as React from 'react';

// Toolbar with Add (+) button
function EditToolbar({ setRows, setRowModesModel }) {
  const handleClick = () => {
    const id = Date.now(); // temporary ID for new row
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        image: '',
        height: '',
        width: '',
        shadow: false,
        rounded: false,
        objectCover: false,
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'image' },
    }));
  };

  return (
    <GridToolbarContainer sx={{ justifyContent: 'flex-start', gap: 1, mb: 1 }}>
      <Tooltip title="Add record">
        <IconButton onClick={handleClick}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </GridToolbarContainer>
  );
}

export default function HeroGrid() {
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});

  // Fetch all heroes from backend
  React.useEffect(() => {
    axios
      .get('http://localhost:4000/api/hero/getAll')
      .then((res) => {
        const data = res.data.map((hero) => ({
          id: hero._id,
          image: hero.image,
          height: hero.height,
          width: hero.width,
          shadow: hero.shadow,
          rounded: hero.rounded,
          objectCover: hero.objectCover,
        }));
        setRows(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Row editing handlers
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () =>
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });

  const handleSaveClick = (id) => async () => {
    const editedRow = rows.find((row) => row.id === id);

    try {
      if (editedRow.isNew) {
        // CREATE new hero
        const res = await axios.post('http://localhost:4000/api/hero/create', editedRow);
        const savedHero = res.data;
        setRows((prevRows) =>
          prevRows.map((row) =>
            row.id === id
              ? { ...savedHero, id: savedHero._id }
              : row
          )
        );
      } else {
        await axios.put(`http://localhost:4000/api/hero/update/${id}`, editedRow);
      }
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = (id) => async () => {
    try {
      await axios.delete(`http://localhost:4000/api/hero/delete/${id}`);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow?.isNew) {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    setRows((prevRows) => prevRows.map((row) => (row.id === newRow.id ? newRow : row)));
    return newRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'image', headerName: 'Image', width: 220, editable: true },
    { field: 'height', headerName: 'Height', width: 170, editable: true },
    { field: 'width', headerName: 'Width', width: 170, editable: true },
    { field: 'shadow', headerName: 'Shadow', type: 'boolean', width: 170, editable: true },
    { field: 'rounded', headerName: 'Rounded', type: 'boolean', width: 170, editable: true },
    { field: 'objectCover', headerName: 'Object Cover', type: 'boolean', width: 180, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 170,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem key="save" icon={<SaveIcon />} label="Save" onClick={handleSaveClick(id)} />,
            <GridActionsCellItem key="cancel" icon={<CancelIcon />} label="Cancel" onClick={handleCancelClick(id)} />,
          ];
        }

        return [
          <GridActionsCellItem key="edit" icon={<EditIcon />} label="Edit" onClick={handleEditClick(id)} />,
          <GridActionsCellItem key="delete" icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{ Toolbar: EditToolbar }}
        componentsProps={{ toolbar: { setRows, setRowModesModel } }}
      />
    </Box>
  );
}
