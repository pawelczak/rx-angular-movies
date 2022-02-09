import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

	constructor(private readonly httpClient: HttpClient) {
	}

	getMovies(): Observable<any> {
		return of(
			{
				'page': 1,
				'results': [
					{
						'adult': false,
						'backdrop_path': '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
						'genre_ids': [
							28,
							12,
							878
						],
						'id': 634649,
						'original_language': 'en',
						'original_title': 'Spider-Man: No Way Home',
						'overview': 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
						'popularity': 15424.687,
						'poster_path': '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
						'release_date': '2021-12-15',
						'title': 'Spider-Man: No Way Home',
						'video': false,
						'vote_average': 8.4,
						'vote_count': 7014
					},
					{
						'adult': false,
						'backdrop_path': '/k2twTjSddgLc1oFFHVibfxp2kQV.jpg',
						'genre_ids': [
							28,
							12,
							14,
							878
						],
						'id': 524434,
						'original_language': 'en',
						'original_title': 'Eternals',
						'overview': 'The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.',
						'popularity': 4695.011,
						'poster_path': '/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg',
						'release_date': '2021-11-03',
						'title': 'Eternals',
						'video': false,
						'vote_average': 7.2,
						'vote_count': 3972
					},
					{
						'adult': false,
						'backdrop_path': '/t4To8feUSysyBs4tlBAbXIrKlCv.jpg',
						'genre_ids': [
							28,
							53
						],
						'id': 860623,
						'original_language': 'en',
						'original_title': 'Last Man Down',
						'overview': 'After civilization succumbs to a deadly pandemic and his wife is murdered, a special forces soldier abandons his duty and becomes a hermit in the Nordic wilderness. Years later, a wounded woman appears on his doorstep. She\'s escaped from a lab and her pursuers believe her blood is the key to a worldwide cure. He\'s hesitant to get involved, but all doubts are cast aside when he discovers her pursuer is none other than Commander Stone, the man that murdered his wife some years ago.',
						'popularity': 2122.78,
						'poster_path': '/4B7liCxNCZIZGONmAMkCnxVlZQV.jpg',
						'release_date': '2021-10-19',
						'title': 'Last Man Down',
						'video': false,
						'vote_average': 6.6,
						'vote_count': 183
					},
					{
						'adult': false,
						'backdrop_path': '/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg',
						'genre_ids': [
							878,
							28,
							12
						],
						'id': 624860,
						'original_language': 'en',
						'original_title': 'The Matrix Resurrections',
						'overview': 'Plagued by strange memories, Neo\'s life takes an unexpected turn when he finds himself back inside the Matrix.',
						'popularity': 2033.422,
						'poster_path': '/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
						'release_date': '2021-12-16',
						'title': 'The Matrix Resurrections',
						'video': false,
						'vote_average': 6.8,
						'vote_count': 2728
					},
					{
						'adult': false,
						'backdrop_path': '/srJ7haOhfykoPOYPQrstOaFem08.jpg',
						'genre_ids': [
							28
						],
						'id': 811592,
						'original_language': 'en',
						'original_title': 'One Shot',
						'overview': 'An elite squad of Navy SEALs, on a covert mission to transport a prisoner off a CIA black site island prison, are trapped when insurgents attack while trying to rescue the same prisoner.',
						'popularity': 2004.77,
						'poster_path': '/3OXiTjU30gWtqxmx4BU9RVp2OTv.jpg',
						'release_date': '2021-11-05',
						'title': 'One Shot',
						'video': false,
						'vote_average': 6.8,
						'vote_count': 188
					},
					{
						'adult': false,
						'backdrop_path': '/o76ZDm8PS9791XiuieNB93UZcRV.jpg',
						'genre_ids': [
							27,
							28,
							878
						],
						'id': 460458,
						'original_language': 'en',
						'original_title': 'Resident Evil: Welcome to Raccoon City',
						'overview': 'Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.',
						'popularity': 1958.495,
						'poster_path': '/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg',
						'release_date': '2021-11-24',
						'title': 'Resident Evil: Welcome to Raccoon City',
						'video': false,
						'vote_average': 6.1,
						'vote_count': 1110
					},
					{
						'adult': false,
						'backdrop_path': '/dK12GIdhGP6NPGFssK2Fh265jyr.jpg',
						'genre_ids': [
							28,
							35,
							80,
							53
						],
						'id': 512195,
						'original_language': 'en',
						'original_title': 'Red Notice',
						'overview': 'An Interpol-issued Red Notice is a global alert to hunt and capture the world\'s most wanted. But when a daring heist brings together the FBI\'s top profiler and two rival criminals, there\'s no telling what will happen.',
						'popularity': 1976.768,
						'poster_path': '/lAXONuqg41NwUMuzMiFvicDET9Y.jpg',
						'release_date': '2021-11-04',
						'title': 'Red Notice',
						'video': false,
						'vote_average': 6.8,
						'vote_count': 2890
					},
					{
						'adult': false,
						'backdrop_path': '/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg',
						'genre_ids': [
							878,
							28,
							12
						],
						'id': 580489,
						'original_language': 'en',
						'original_title': 'Venom: Let There Be Carnage',
						'overview': 'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
						'popularity': 1848.371,
						'poster_path': '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
						'release_date': '2021-09-30',
						'title': 'Venom: Let There Be Carnage',
						'video': false,
						'vote_average': 7.1,
						'vote_count': 6160
					},
					{
						'adult': false,
						'backdrop_path': '/m9tmb7AqBGHnuclVCcJYL8lZUp8.jpg',
						'genre_ids': [
							28,
							53,
							80,
							18
						],
						'id': 766907,
						'original_language': 'en',
						'original_title': 'American Siege',
						'overview': 'An ex-NYPD officer-turned-sheriff of a small rural Georgia town has to contend with a gang of thieves who have taken a wealthy doctor hostage.',
						'popularity': 1749.698,
						'poster_path': '/daeVrgyj0ue8qb3AHyU3UeCwoZz.jpg',
						'release_date': '2022-01-07',
						'title': 'American Siege',
						'video': false,
						'vote_average': 5.5,
						'vote_count': 10
					},
					{
						'adult': false,
						'backdrop_path': '/cinER0ESG0eJ49kXlExM0MEWGxW.jpg',
						'genre_ids': [
							28,
							12,
							14
						],
						'id': 566525,
						'original_language': 'en',
						'original_title': 'Shang-Chi and the Legend of the Ten Rings',
						'overview': 'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
						'popularity': 1289.463,
						'poster_path': '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
						'release_date': '2021-09-01',
						'title': 'Shang-Chi and the Legend of the Ten Rings',
						'video': false,
						'vote_average': 7.8,
						'vote_count': 5477
					},
					{
						'adult': false,
						'backdrop_path': '/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg',
						'genre_ids': [
							16,
							28,
							12,
							14
						],
						'id': 635302,
						'original_language': 'ja',
						'original_title': '劇場版「鬼滅の刃」無限列車編',
						'overview': 'Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar\'s head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!',
						'popularity': 1158.781,
						'poster_path': '/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
						'release_date': '2020-10-16',
						'title': 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
						'video': false,
						'vote_average': 8.4,
						'vote_count': 2101
					},
					{
						'adult': false,
						'backdrop_path': '/mo57hzhW3BcZL1f7MNteWKHsmlN.jpg',
						'genre_ids': [
							28,
							53
						],
						'id': 763788,
						'original_language': 'en',
						'original_title': 'Dangerous',
						'overview': 'A reformed sociopath heads to a remote island after the death of his brother. Soon after his arrival, the island falls under siege from a deadly gang of mercenaries, and when he discovers their role in his brother’s demise, he sets out on a relentless quest for vengeance.',
						'popularity': 1205.583,
						'poster_path': '/vTtkQGC7qKlSRQJZYtAWAmYdH0A.jpg',
						'release_date': '2021-11-05',
						'title': 'Dangerous',
						'video': false,
						'vote_average': 6.5,
						'vote_count': 132
					},
					{
						'adult': false,
						'backdrop_path': '/7esxXkFyl0dVD7ViR0Q6fK5VeXB.jpg',
						'genre_ids': [
							28,
							53,
							80
						],
						'id': 787310,
						'original_language': 'en',
						'original_title': 'Survive the Game',
						'overview': 'When cop David is injured in a drug bust gone wrong, his partner Cal chases the two criminals who shot him. They all land at a remote farm owned by troubled vet Eric, and as Cal and Eric plot their defense, more of the gang arrives - along with a wounded David. Outnumbered, the three heroes must use stealth, smarts, and good shooting to take down the drug-dealing mob.',
						'popularity': 688.856,
						'poster_path': '/xF1uc2pEf34X2G41wvZaF5H0V7C.jpg',
						'release_date': '2021-10-08',
						'title': 'Survive the Game',
						'video': false,
						'vote_average': 5.8,
						'vote_count': 92
					},
					{
						'adult': false,
						'backdrop_path': '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
						'genre_ids': [
							28,
							14,
							12
						],
						'id': 460465,
						'original_language': 'en',
						'original_title': 'Mortal Kombat',
						'overview': 'Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung\'s best warrior, Sub-Zero, seeks out and trains with Earth\'s greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.',
						'popularity': 672.297,
						'poster_path': '/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg',
						'release_date': '2021-04-07',
						'title': 'Mortal Kombat',
						'video': false,
						'vote_average': 7.2,
						'vote_count': 4344
					},
					{
						'adult': false,
						'backdrop_path': '/1BqX34aJS5J8PefVnQSfQIEPfkl.jpg',
						'genre_ids': [
							80,
							28,
							53
						],
						'id': 826749,
						'original_language': 'en',
						'original_title': 'Fortress',
						'overview': 'The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.',
						'popularity': 673.781,
						'poster_path': '/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg',
						'release_date': '2021-12-17',
						'title': 'Fortress',
						'video': false,
						'vote_average': 6.3,
						'vote_count': 136
					},
					{
						'adult': false,
						'backdrop_path': '/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
						'genre_ids': [
							35,
							28,
							12,
							878
						],
						'id': 550988,
						'original_language': 'en',
						'original_title': 'Free Guy',
						'overview': 'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
						'popularity': 634.029,
						'poster_path': '/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg',
						'release_date': '2021-08-11',
						'title': 'Free Guy',
						'video': false,
						'vote_average': 7.7,
						'vote_count': 4820
					},
					{
						'adult': false,
						'backdrop_path': '/8pgKccb5PfE1kWB9qqiXJem83VC.jpg',
						'genre_ids': [
							28,
							53
						],
						'id': 522016,
						'original_language': 'en',
						'original_title': 'The 355',
						'overview': 'A group of top female agents from American, British, Chinese, Columbian and German  government agencies are drawn together to try and stop an organization from acquiring a deadly weapon to send the world into chaos.',
						'popularity': 792.077,
						'poster_path': '/rOzMhCNYABSg0dB8BbAeGG3pSzl.jpg',
						'release_date': '2022-01-05',
						'title': 'The 355',
						'video': false,
						'vote_average': 6.2,
						'vote_count': 142
					},
					{
						'adult': false,
						'backdrop_path': '/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg',
						'genre_ids': [
							28,
							18,
							36
						],
						'id': 617653,
						'original_language': 'en',
						'original_title': 'The Last Duel',
						'overview': 'King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.',
						'popularity': 601.201,
						'poster_path': '/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg',
						'release_date': '2021-10-13',
						'title': 'The Last Duel',
						'video': false,
						'vote_average': 7.5,
						'vote_count': 1649
					},
					{
						'adult': false,
						'backdrop_path': '/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg',
						'genre_ids': [
							28,
							12,
							14
						],
						'id': 436969,
						'original_language': 'en',
						'original_title': 'The Suicide Squad',
						'overview': 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
						'popularity': 572.155,
						'poster_path': '/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg',
						'release_date': '2021-07-28',
						'title': 'The Suicide Squad',
						'video': false,
						'vote_average': 7.7,
						'vote_count': 5463
					},
					{
						'adult': false,
						'backdrop_path': '/ejgC2lEmuGXiP0A1LvwNezUjNmt.jpg',
						'genre_ids': [
							878,
							28,
							12
						],
						'id': 406759,
						'original_language': 'en',
						'original_title': 'Moonfall',
						'overview': 'A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.',
						'popularity': 727.365,
						'poster_path': '/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg',
						'release_date': '2022-02-03',
						'title': 'Moonfall',
						'video': false,
						'vote_average': 6.4,
						'vote_count': 15
					}
				],
				'total_pages': 1571,
				'total_results': 31420
			}
		)
			.pipe(
				map(_ => [..._.results])
			);
	}

}
